import mongoose from 'mongoose';

import '../models/Note';

import config from '../config.js';

const Note = mongoose.model('Note');

export function setUpConnection() {
	const {dbHost, dbPort, dbName, dbUser, dbPassword} = config.mongo;
	const connectionString = `mongodb://${dbHost}:${dbPort}`;

	mongoose.Promise = global.Promise;
	
	mongoose.connect(connectionString, {
		useMongoClient: true,
		user: dbUser,
        pass: dbPassword,
        db: dbName,
	});
}

export function listNotes() {
	return Note.find();
}

export function createNote(data) {
	const note = new Note({
		title: data.title,
		text: data.text,
		color: data.color,
		createdAt: new Date()
	});

	return note.save();
}

export function deleteNote(id) {
	return Note.findById(id).remove();
}
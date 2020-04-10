import mongoose from 'mongoose';

import '../models/Note';

import config from '../config.js';

const Note = mongoose.model('Note');

export function setUpConnection() {
	mongoose.connect(`mongodb://${config.mongo.dbHost}:${config.mongo.dbPort}/${config.mongo.dbName}`);
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
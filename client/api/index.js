import axios from 'axios';

import config from '../config.js';

export default {
    listNotes() {
        return axios.get(`${config.apiPrefix}/notes`);
    },

    createNote(data) {
        return axios.post(`${config.apiPrefix}/notes`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${config.apiPrefix}/notes/${noteId}`);
    }
}

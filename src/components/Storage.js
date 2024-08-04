import {
    state
} from '../common.js';

const storedJobItem = localStorage.getItem('bookmarkJobItems');
if (storedJobItem) {
    state.bookmarkJobItems = JSON.parse(storedJobItem);
}
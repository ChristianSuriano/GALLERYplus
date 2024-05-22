import Generate from './utils/Generate.js';
export default class ModelPhoto {
    constructor(title, url, description, tag) {
        this.id = Generate.generateUUID();
        this.title = title;
        this.url = url;
        this.tag = tag;
        this.description = description;
    }
}
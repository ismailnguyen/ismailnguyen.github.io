export default class WorksService {
    async getAllPages() {
        const response = await fetch(this.constructApiUrl('pages'));

        return response.json();
    }

    async getPage(pageId) {
        const response = await fetch(this.constructApiUrl('page', pageId));

        return response.json();
    }

    async getPageImages(pageId) {
        const response = await fetch(this.constructApiUrl('pageImages', pageId));

        return response.json();
    }

    constructApiUrl = (resource, parameter) => {
        if (parameter) {
            return process.env.VUE_APP_WORKS_API_URL + resource + '/' + parameter
        }

        return process.env.VUE_APP_WORKS_API_URL + resource + '/'
    }
}

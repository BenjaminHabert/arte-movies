import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});

const USE_FAKE_LOCAL_DATA = true;



class api {
    getMovies() {
        return this.getFakeMovies();
        // return http.get("/tutorials");
    }
    getFakeMovies() {
        const movies = [];
        for (let i = 0; i < 20; i++) {
            movies.push(
                {
                    "title": "movie-" + i,
                    "id": "id-" + i
                }
            )
        }
        const maPromesse = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(movies);
            }, 300);
        });

        return maPromesse
    }


    getMovieInfos(title) {
        return this.getFakeMovieInfos(title);
    }
    getFakeMovieInfos(title) {
        const infos = {
            actors: "jean dujardin"
        }

        const maPromesse = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(infos);
            }, 300);
        });

        return maPromesse
    }

}

export default new api();
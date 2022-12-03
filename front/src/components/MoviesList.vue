<script>
import api from "../services/api";
import Movie from "./Movie.vue";

export default {
    name: "movies-list",
    data() {
        return {
            movies: [],
            // currentMovie: null,
            // currentIndex: -1,
            // title: ""
        };
    },
    components: { Movie },
    methods: {
        retrieveMovies() {
            api.getMovies()
                .then(movies => {
                    this.movies = movies;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        // refreshList() {
        //     this.retrieveTutorials();
        //     this.currentTutorial = null;
        //     this.currentIndex = -1;
        // },

        // setActiveTutorial(tutorial, index) {
        //     this.currentTutorial = tutorial;
        //     this.currentIndex = index;
        // },

        // removeAllTutorials() {
        //     TutorialDataService.deleteAll()
        //         .then(response => {
        //             console.log(response.data);
        //             this.refreshList();
        //         })
        //         .catch(e => {
        //             console.log(e);
        //         });
        // },

        // searchTitle() {
        //     TutorialDataService.findByTitle(this.title)
        //         .then(response => {
        //             this.tutorials = response.data;
        //             console.log(response.data);
        //         })
        //         .catch(e => {
        //             console.log(e);
        //         });
        // }
    },
    mounted() {
        this.retrieveMovies();
    }
};
</script>

<template>
    <div class="list row">
        <!-- <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search by title" v-model="title" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
                        Search
                    </button>
                </div>
            </div>
        </div> -->
        <div class="col-md-6">
            <h4>Movies List</h4>
            <ul class="list-group">
                <!-- <li v-for="(movie, index) in movies" :key="index" :movie="movie">coucou</li> -->
                <Movie v-for="(movie, index) in movies" :key="index" :movie="movie" />
            </ul>
        </div>
    </div>
</template>
  
  
<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>
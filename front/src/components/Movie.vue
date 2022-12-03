<script>
import api from "../services/api";


export default {
    name: "movie",
    props: ["movie"],
    data() {
        return {
            infos: {}
        }
    },
    methods: {
        retrieveInfos() {
            const title = this.movie.title;
            api.getMovieInfos(title)
                .then(infos => {
                    this.infos = infos;
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.retrieveInfos();
    }
};
</script>

<template>
    <li class="list-group-item">
        {{ movie.title }} (actors: {{ infos.actors }})
    </li>
</template>


<style>

</style>
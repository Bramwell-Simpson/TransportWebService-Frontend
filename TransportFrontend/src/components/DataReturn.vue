<template>
    <v-main id="data" class="bg-grey">
        <v-container style="min-height: 100vh;" class="align-center d-flex">
            <v-row justify="center">
                <v-col v-show="stopCount" cols="12" lg="6">
                    <StopsCard :locality="this.locality" :stopsCount="this.stopCount"></StopsCard>
                </v-col>
            </v-row>
            <StopLocality :v-if="stops" :stops="this.stops"></StopLocality>
        </v-container>
    </v-main>
</template>

<script>

    import StopsCard from "./StopCounts.vue";
    import StopLocality from "./StopLocality.vue"
    import stopService from "../services/stops.service";

    export default {
        data() {
            return {
                locality: "",
                stopCount: "",

                stops: [],

                error: [],
                loading: true
            }
        },
        methods: {
            setStopCount(local){

                console.log("Setting stop count");

                stopService.getStopCount(local)
                .then(stopCount => {
                    this.locality = local;
                    stopCount.text().then((text) => {this.stopCount = text.toString()});
                    this.loading = false;
                })
                .catch(error => {this.error = error});
            },

            getStopTypeLocality(local, types) {

                stopService.getStopsTypeLocality(local, types)
                .then(stops => {
                    this.stops = stops;
                    this.locality = local;
                    this.loading = false;
                })
                .catch(error => {this.error = error});
            }
        },
        components: {
            StopsCard,
            StopLocality
        }
    }
</script>
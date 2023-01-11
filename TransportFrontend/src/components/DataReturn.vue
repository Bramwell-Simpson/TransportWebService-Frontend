<template>
    <v-main id="data" class="bg-grey">
        <v-container style="min-height: 100vh;" class="align-center d-flex">
            <v-row justify="center">
                <v-col v-show="stopCount && this.latLon === 'countOnly'" cols="12" lg="6">
                    <StopsCard :locality="this.locality" :stopsCount="this.stopCount"></StopsCard>
                </v-col>
                <v-col v-show="this.latLon === 'countOnly'" cols="12" align="center">
                    <a href="#forms"><v-icon size="100px" icon="mdi-chevron-up"></v-icon></a>
                </v-col>
            </v-row>
            <StopLocality v-show="this.stops && this.latLon === 'hide'" :stops="this.stops"></StopLocality>
            <StopLatLon v-show="this.stops && this.latLon == 'show'" :stops="this.stops"></StopLatLon>
        </v-container>
    </v-main>
</template>

<script>

    import StopsCard from "./StopCounts.vue";
    import StopLocality from "./StopLocality.vue"
    import StopLatLon from "./StopLatLon.vue"

    import stopService from "../services/stops.service";

    export default {
        data() {
            return {
                locality: "",
                stopCount: "",

                latLon: "hide",

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
                    this.latLon = "countOnly";
                })
                .catch(error => {this.error = error});
            },

            getStopTypeLocality(local, types) {

                stopService.getStopsTypeLocality(local, types)
                .then(stops => {
                    this.stops = stops;
                    this.locality = local;
                    this.loading = false;
                    this.latLon = "hide";
                })
                .catch(error => {this.error = error});
            },

            getStopLatLon(lat, lon, type) {

                stopService.getNearestStopsType(lat, lon, type)
                .then(stops => {
                    this.stops = stops,
                    this.loading = false;
                    this.latLon = "show";
                })
                .catch(error => {this.error = error});
            }
        },
        components: {
            StopsCard,
            StopLocality,
            StopLatLon
        }
    }
</script>
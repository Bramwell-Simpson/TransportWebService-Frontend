<template>
    <v-main id="forms" class="bg-blue-grey">
        <v-container style="height: 100vh; max-height: 100vh" class="align-center d-flex">
            <v-row justify="center">
                <v-col cols="12" lg="6">
                    <v-card  elevation="10">
                        <v-card-item>
                            <v-card-title>Enter some data and click the arrow</v-card-title>
                        </v-card-item>
                        <v-card-text>
                            <v-form  @submit.prevent="submitData();">
                                <v-select v-model="selectType" :items="items" label="Select Type"></v-select>
                                <v-select v-show="checkSelected() != 'hideStop'" v-model="stopType" :items="stops" label="Stop Type"></v-select>
                                <v-text-field v-show="checkSelected() !='showLoc' || checkSelected() == 'hideStop'" v-model="locality" label="Locality"></v-text-field>

                                <v-text-field v-show="checkSelected() == 'showLoc'" v-model="latitude" label="Latitude"></v-text-field>
                                <v-text-field v-show="checkSelected() == 'showLoc'" v-model="longitude" label="Longitude"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block @click="submitData();" variant="outlined">Submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" align="center">
                    <a href="#data"><v-icon size="100px" icon="mdi-chevron-down"></v-icon></a>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    <DataReturn v-show="this.submitted" ref="DataReturn"></DataReturn>
</template>

<script>

    import DataReturn from "./DataReturn.vue"

    export default {
        data() {
            return {
                locality: "",
                selectType: "",
                stopType: "",
                submitted: false,
                items: [
                    "Get Stop Count",
                    "Get Stops Locality and Type",
                    "Get Nearest Stop"
                ],
                stops: [
                    "BUS",
                    "RLW",
                    "MET",
                    "FER",
                    "AIR",
                    "TXR"
                ],
                latitude: "",
                longitude: ""
            }
        },
        components: {
            DataReturn
        },
        methods: {
            checkSelected() {

                switch (this.selectType) {
                    case "Get Nearest Stop":
                        return "showLoc"
                    case "Get Stop Count":
                        return "hideStop"
                    default:
                        return "hideLoc"
                };

            },

            submitData()
            {
                this.submitted = true;

                switch (this.selectType) {
                    case "Get Nearest Stop":
                        this.$refs.DataReturn.getStopLatLon(this.latitude, this.longitude, this.stopType);
                        break;
                    case "Get Stop Count":
                        this.$refs.DataReturn.setStopCount(this.locality);
                        break;
                    case "Get Stops Locality and Type": 
                        this.$refs.DataReturn.getStopTypeLocality(this.locality, this.stopType);
                        break;
                };
            }
        }
    }
</script>
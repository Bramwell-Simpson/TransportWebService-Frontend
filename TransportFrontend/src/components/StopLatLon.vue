<template>
    <v-row justify="center">
        <v-col v-for="stop in stops" cols="12" md="4">
            <v-card>
                <v-card-item>
                    <v-card-title>{{ stop.name }}</v-card-title>
                    <v-card-subtitle>{{ stop.locality }}</v-card-subtitle>
                </v-card-item>
                <v-card-text>
                    <div class="text-body-1">
                        <p>Naptan Code - {{ stop.code }}</p>
                    </div>
                    <div class="text-body-2">
                        <p>Stop street - {{ stop.location.street }}</p>
                        <p>Stop landmark - {{ stop.location.landmark }}</p>
                        <p>Stop Latitude - {{ stop.location.latitude }}</p>
                        <p>Stop Longitude - {{ stop.location.longitude }}</p>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" align="center">
            <a href="#forms"><v-icon size="100px" icon="mdi-chevron-up"></v-icon></a>
        </v-col>
    </v-row>

</template>

<script>
    export default {
        props: {
            stops: Array
        }
    }

</script>
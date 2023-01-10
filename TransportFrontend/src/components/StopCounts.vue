<template>
    <v-card>
        <v-card-item>
            <v-card-title>Stops Count</v-card-title>
            <v-card-subtitle>{{ locality }}</v-card-subtitle>
        </v-card-item>
        <v-card-text>The number of stops in this location is {{ stopsCount }}</v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: {
            locality: String,
            stopsCount: String
        }
            
    }
</script>
<template>
  <section>FILTER</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register as a Couch</base-button>
    </div>
    <ul v-if="hasCouches">
      <CouchItem
        v-for="couch in filteredCouches"
        :key="couch.id"
        :id="couch.id"
        :first-name="couch.firstName"
        :last-name="couch.lastName"
        :rate="couch.hourlyRate"
        :areas="couch.areas"
      >
        {{ couch.firstName }}
      </CouchItem>
    </ul>
    <h3 v-else>No Couches found</h3>
</base-card>
  </section>
</template>

<script>
import CouchItem from '../../components/couches/CouchItem.vue';

export default {
  components: {
    CouchItem,
  },
  computed: {
    filteredCouches() {
      return this.$store.getters['couches/couches'];
    },
    hasCouches() {
      return this.$store.getters['couches/hasCouches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
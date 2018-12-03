<template>
  <v-app>
    <div v-if="!$route.meta.public">
      <MainLayout />
    </div>
    <div v-else>
      <EmptyLayout />
    </div>

    <Snackbar />
  </v-app>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout';
import EmptyLayout from '@/components/layout/EmptyLayout';
import Snackbar from '@/components/layout/Snackbar';

export default {
  name: 'App',
  components: {
    MainLayout,
    EmptyLayout,
    Snackbar,
  },
  data () {
    return {
      //
    }
  }
}
</script>

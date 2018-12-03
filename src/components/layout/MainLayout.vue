<template>
  <div>
    <Toolbar></Toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!--<Footer></Footer>-->
  </div>
</template>

<script>
import Toolbar from '@/components/layout/Toolbar';
// import Footer from '@/components/layout/Footer';

export default {
  name: 'MainLayout',
  components: {
    Toolbar,
    // Footer,
  },
};
</script>

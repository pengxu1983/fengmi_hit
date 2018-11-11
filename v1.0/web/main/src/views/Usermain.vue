<template>
  <div class="usermain">
    <UsermainPage></UsermainPage>
  </div>
</template>

<script>
// @ is an alias to /src
import UsermainPage from '@/components/UsermainPage.vue'

export default {
  name: 'usermain',
  props : {
  },
  components: {
    UsermainPage 
  }
}
</script>

<template>
  <div class="create">
    <CreatePage></CreatePage>
  </div>
</template>

<script>
// @ is an alias to /src
import CreatePage from '@/components/CreatePage.vue'

export default {
  name: 'create',
  components: {
    CreatePage
  }
}
</script>

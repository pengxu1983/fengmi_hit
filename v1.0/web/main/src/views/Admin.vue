<template>
  <div class="admin">
    <AdminPage
      :username="username"
      :realname="realname"
      :bankinfo="bankinfo"  
      :bankcard="bankcard"  
      :institute="institute" 
      :membertype="membertype"
      :email="email"     
    ></AdminPage>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminPage from '@/components/AdminPage.vue'

export default {
  name: 'admin',
  props : {
    username  : '',
    realname  : '',
    bankinfo  : '',
    bankcard  : '',
    institute : '',
    membertype: '',
    email     : '',
  },
  components: {
    AdminPage
  }
}
</script>

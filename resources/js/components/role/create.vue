

<template>
  
  <div>

 <div class="row">
  <router-link to="/role" class="btn btn-primary">All Role </router-link>
   
 </div>



    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Role</h1>
                  </div>

      <form class="user" @submit.prevent="roleInsert" enctype="multipart/form-data">

        <div class="form-group">

          <div class="form-row">
            <div class="col-md-12">
         <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter Role Name" v-model="form.name">
       <small class="text-danger" v-if="errors.name"> {{ errors.name[0] }} </small>
            </div> 
            
          </div>
        </div>
       
         <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-md-3">List</div>
                <div class="col-md-3">Add</div>
                <div class="col-md-3">Edit</div>
                <div class="col-md-3">Delete</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3" v-for="permission in listPermission" :key="permission.id">
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <input type="checkbox" class="form-control" v-model="form.permission" :value="permission.id" >
                    </div>
                  </div>
                  <div class="col-md-9">
                    {{ permission.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </div>
        
      </form>
                  <hr>
                  <div class="text-center">
  
  
                  </div>
                  <div class="text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>



<script type="text/javascript">
  import { mapState } from 'vuex'
  export default {
    created(){
      if (!User.loggedIn()) {
        this.$router.push({name: '/'})
      }
    },

    created(){
      this.$store.dispatch('permission/fetch')
    },

    data(){
    return {
      form:{
        name: null,
        permission: []
      },
      errors:{}
    }
  },

  computed: {
    ...mapState('permission', {
      listPermission: 'permissions'
    })
  },

  methods:{
    async roleInsert(){
      try{
        await this.$store.dispatch('role/addRole', this.form);
        this.$router.push({ name: 'role'})
        Notification.success()
      } catch(e) {
        this.errors = e.response.data.errors
      }
    },
  } 


  }
   
</script>


<style type="text/css">
  
</style>
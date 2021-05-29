 

<template>
  
  <div>

 <div class="row">
  <router-link to="/permission" class="btn btn-primary">All Permission </router-link>
   
 </div>



    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4"> Permission Update</h1>
                  </div>

      <form class="user" @submit.prevent="permissionUpdate" enctype="multipart/form-data">

        <div class="form-group">

          <div class="form-row">
            <div class="col-md-12">
         <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter Your Full Name" v-model="form.name">
       <small class="text-danger" v-if="errors.name"> {{ errors.name[0] }} </small>
            </div>   
            
          </div>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Update</button>
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
  import { mapState } from 'vuex';
  export default {
    created(){
      if (!User.loggedIn()) {
        this.$router.push({name: '/'})
      }
    },

    data(){
    return {
      errors:{}
    }
  },
  created(){
    this.$store.dispatch('permission/fetchOne', this.$route.params.id);
  },

  computed: {
      ...mapState('permission', {
          form: 'permission'
      }),
  },

  methods:{
    permissionUpdate(){
      this.$store.dispatch('permission/editPermission', this.form);
      this.$router.push({ name: 'permission'})
      Notification.success()
     },
  } 


  }
   
</script>


<style type="text/css">
  
</style>
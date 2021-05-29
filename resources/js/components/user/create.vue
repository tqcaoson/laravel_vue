

<template>
  
  <div>

 <div class="row">
  <router-link to="/user" class="btn btn-primary">All User </router-link>
   
 </div>



    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add User</h1>
                  </div>

      <form class="user" @submit.prevent="userInsert" enctype="multipart/form-data">

        <div class="form-group">

          <div class="form-row">
            <div class="col-md-6">
         <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter Your Full Name" v-model="form.name">
       <small class="text-danger" v-if="errors.name"> {{ errors.name[0] }} </small>
            </div>


     <div class="col-md-6">
         <input type="email" class="form-control" id="exampleInputFirstName" placeholder="Enter Your Email" v-model="form.email">
         <small class="text-danger" v-if="errors.email"> {{ errors.email[0] }} </small>
            </div>     
            
          </div>
        </div>
       
        
         <div class="form-group">

          <div class="form-row">
            <div class="col-md-6">
         <input type="password" class="form-control" id="exampleInputFirstName" placeholder="Enter Your Password" v-model="form.password">
         <small class="text-danger" v-if="errors.password"> {{ errors.password[0] }} </small>
            </div>


     <div class="col-md-6">
         <input type="password" class="form-control" id="exampleInputFirstName" placeholder="Enter Your Re-Password" v-model="form.confirm_password">
         <small class="text-danger" v-if="errors.confirm_password"> {{ errors.confirm_password[0] }} </small>
            </div>     
            
          </div>
        </div>

        <div class="form-group">

          <div class="form-row">
            <div class="col-md-12">
         <select type="text" class="form-control" id="exampleInputFirstName" v-model="form.roles">
           <option :value="role.id" v-for="role in roles" :key="role.id">{{ role.name }}</option>
         </select>
         <small class="text-danger" v-if="errors.roles"> {{ errors.roles[0] }} </small>
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
  import { mapState } from 'vuex';
  export default {
    created(){
      if (!User.loggedIn()) {
        this.$router.push({name: '/'})
      }
      this.$store.dispatch('role/fetch');
    },

    data(){
    return {
      form:{
        name: null,
        email: null,
        password: null,
        confirm_password: null,
        roles: []
      },
      errors:{}
    }
  },

  computed: {
    ...mapState('role', {
        roles: 'roles'
    }),
  },

  methods:{
    userInsert(){
      this.$store.dispatch('user/addUser', this.form);
      this.$router.push({ name: 'user'})
      Notification.success()
    },
  } 


  }
   
</script>


<style type="text/css">
  
</style>
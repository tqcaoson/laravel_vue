

<template>
  
  <div>

 <div class="row" v-for="per in hasPermissions" :key="per.id">
   <div v-if="per.name == 'user-create'">
    <router-link to="/store-user" class="btn btn-primary">Add User </router-link>
   </div>
 </div>
<br>
   <input type="text" v-model="searchTerm" class="form-control" style="width: 300px;" placeholder="Search Here">


<br>

   <div class="row">
            <div class="col-lg-12 mb-4">
              <!-- Simple Tables -->
              <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">User List</h6>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in filtersearch" :key="user.id">
                        <td> {{ user.name }} </td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.role_name }}</td>
                        <td>
                          <div style="display: inline;" v-for="per in hasPermissions" :key="per.id">
                            <div style="display: inline;" v-if="per.name == 'user-edit'">
                              <router-link :to="{name: 'edit-user', params:{id:user.id}}" class="btn btn-sm btn-primary">Edit</router-link>
                            </div>
                            <div style="display: inline;" v-if="per.name == 'user-delete'">
                              <a @click="deleteUser(user.id)" class="btn btn-sm btn-danger"><font color="#ffffff">Delete</font></a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    
                    </tbody>
                  </table>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
          </div>
          <!--Row-->


   
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
      return{
        searchTerm:''
      }
    },
    computed:{
      ...mapState('user', {
          users: 'users'
      }),
      ...mapState('user', {
          hasPermissions: 'hasPermissions'
      }),
      filtersearch(){
        return this.users.filter(user => {
          return user.name.match(this.searchTerm)
        }) 
      }
    },
 
  methods:{
    deleteUser(id){
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.$store.dispatch('user/deleteUser', id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  } 

  },
  created(){
    this.$store.dispatch('user/fetch');
    this.$store.dispatch('user/fetchHasRole', localStorage.getItem('userId'))
  } 
  

  } 
</script>


<style type="text/css">
  #em_photo{
    height: 40px;
    width: 40px;
  }
</style>


<template>

</template>



<script type="text/javascript">
	
export default {
   created(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('userId')
    Toast.fire({
          icon: 'success',
          title: 'Logout successfully'
        })
    this.$router.push({ name: '/'})

   }
 

}




</script>


<style type="text/css">
	
</style>


<template>

</template>



<script type="text/javascript">
	import AppStorage from '../../Helpers/AppStorage';
   export default {
      created(){
         AppStorage.clear()
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
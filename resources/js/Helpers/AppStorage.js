class AppStorage{

 storeToken(token){
 	localStorage.setItem('token',token);
 }

 storeUser(user){
 	localStorage.setItem('user',user);
 }

 storeUserId(userId){
	localStorage.setItem('userId',userId);
 }

 store(token,user,userId){
 	this.storeToken(token)
 	this.storeUser(user)
	this.storeUserId(userId)
  }

  clear(){
  	localStorage.removeItem('token')
  	localStorage.removeItem('user')
	localStorage.removeItem('userId')
  }

  getToken(){
  	localStorage.getItem(token);
  }

   getUser(){
  	localStorage.getItem(user);
  }

  getUserId(){
	localStorage.getItem(userId);
 }



}

export default AppStorage = new AppStorage();
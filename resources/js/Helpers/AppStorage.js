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
  	return localStorage.getItem('token');
  }

   getUser(){
	return localStorage.getItem('user');
  }

  getUserId(){
	return localStorage.getItem('userId');
 }



}

export default AppStorage = new AppStorage();
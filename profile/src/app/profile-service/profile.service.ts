import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
}
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/"+this.userName+"/repos")
  .pipe(map(res => res));
}

import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { Users } from './user.model';
import { Card } from "../shared/card/card";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type Users = {
//     id:string,
//     name:string,
//     avatar:string
//   }

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: Users;
  @Input({required:true}) selected!:boolean;
  /*
  // declared the input by single literal
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  */
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>(); // this emitter only string value .. even we set our own data type.
  select = output<string>(); // this also we can use output method

  // we can also create input method
  /*
  avatar = input.required<string>();
  */

  // name = input.required<string>(); // we can also use input input method

  /*
      // selectedUser = DUMMY_USERS[randomIndex];     // without signal
      selectedUser = signal(DUMMY_USERS[randomIndex]);
      imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar)

      // get imagePath(){ // before signal usage
      //   return 'assets/users/'+this.selectedUser.avatar;
      // }

      onSelectUser(){
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        // this.selectedUser = DUMMY_USERS[randomIndex];
        this.selectedUser.set(DUMMY_USERS[randomIndex]);
      }
  */

  // normal input method calling by string variable.
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  /*
  // call method by using signal
  imagePath = computed(()=>{
    return 'assets/users/' + this.avatar();
  })
    */

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

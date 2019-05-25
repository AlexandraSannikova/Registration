import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl} from '@angular/forms';
import {ForShowTable} from '../models/for-show-table.enum';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  search = new FormControl();
  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {}

  get users(): any {
    const content: ForShowTable = this.activatedRoute.snapshot.data.content;

    switch (content) {
      case ForShowTable.MAIN:
        return this.auth.getUsers;

      case ForShowTable.SEARCH:
        const query = this.activatedRoute.snapshot.queryParams.q;
        return this.auth.searchUsers(query);
    }
  }

  get user(): string {
    return this.auth.getUserName;
  }

  isLoggedUser(user: any): boolean {
    return  this.user === user.login ;
  }

  handleSearch() {
    this.router.navigate(['search'], {queryParams: {q: this.search.value}});
  }
}

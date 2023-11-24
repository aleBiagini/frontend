import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { get } from '../queries/baseQuery';
import { Post } from '../entities/post';
import { BaseEntity } from '../entities/baseEntity';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  finalString!: string;

  ngOnInit(): void {
    get("{posts { nodes {id title date categories {   nodes { name } } } }}").then(x => {
      this.finalString = JSON.stringify(x.data);
    }
    );
  }

}

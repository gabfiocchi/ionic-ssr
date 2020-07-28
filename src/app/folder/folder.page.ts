import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.titleService.setTitle(this.folder);
    this.metaService.updateTag({ name: 'description', content: `Ionic SSR page: ${this.folder}` });
  }

}

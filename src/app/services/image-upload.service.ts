import { Injectable } from '@angular/core';
import { } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage : Storage) { }
}

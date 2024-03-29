import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HfInference } from '@huggingface/inference';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HfService {
  constructor(private http: HttpClient) {}

  inference = new HfInference(environment.HF_TOKEN);

  async sendQuestion(promt: string) {
    const gpt2 = this.inference.endpoint(
      'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta'
    );

    const { generated_text } = await gpt2.textGeneration({
      inputs: promt,
    });

    return generated_text;
  }
}

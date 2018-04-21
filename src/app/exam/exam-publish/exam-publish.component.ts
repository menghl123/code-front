import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnswerService} from '../../core/business-service/answer.service';
import {Question} from '../../../model/question.model';
import {NzMessageService} from 'ng-zorro-antd';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-exam-publish',
  templateUrl: './exam-publish.component.html',
  styleUrls: ['./exam-publish.component.scss']
})
export class ExamPublishComponent implements OnInit {
  form: FormGroup;
  editorConfig: { [key: string]: any };
  question: Question;

  constructor(private fb: FormBuilder,
              private messageService: NzMessageService,
              private domSanitizer: DomSanitizer,
              private answerService: AnswerService) {
    this.form = this.fb.group({
      slug: ['', [Validators.required]],
      markdown: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.initCkeditor();
  }

  get tags() {
    if (this.question && this.question.tags) {
      return this.question.tags.split(',').filter(tag => tag && tag !== '');
    }
    return [];
  }

  get questionContent() {
    if (this.question && this.question.content) {
      return this.domSanitizer.bypassSecurityTrustHtml(this.question.content);
    }
    return this.domSanitizer.bypassSecurityTrustHtml('');
  }

  publish() {
    const answer = {
      number: this.question.id,
      content: this.form.value.markdown
    };
    this.answerService.publish(answer).subscribe(result => {
      if (result.status === 200) {
        this.messageService.success('提交题解成功');
        this.form.reset({
          slug: '',
          markdown: ''
        });
        this.question = null;
      } else {
        this.messageService.error(`提交题解失败,${result.message}`);
      }
    }, error => {
      this.messageService.error(`提交题解失败,${error}`);
    });
  }

  query() {
    // zigzag-conversion
    const slug = this.form.value.slug;
    this.answerService.query(slug).subscribe(result => {
      if (result.status === 200) {
        this.question = result.data;
      } else {
        this.messageService.error(`获取题解失败,${result.message}`);
      }
    }, error => {
      this.messageService.error(`获取题解失败,${error}`);
    });
  }

  private initCkeditor() {
    this.editorConfig = {
      removeButtons: 'Source,Save,NewPage,Scayt',
      image_previewText: '',
      filebrowserBrowseUrl: 'http://127.0.0.1/',
      filebrowserUploadUrl: 'http://localhost:8080/api/upload/image',
      height: 300
    };
  }
}

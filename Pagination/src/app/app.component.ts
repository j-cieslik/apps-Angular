import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Kebab Bar',
      url: 'https://images.unsplash.com/photo-1498530875991-2806ee9dd6d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a2ViYWJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Potatos',
      url: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdGF0b3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Greece',
      url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  checkWindowIndex(index: number): boolean {
    return Math.abs(this.currentPage - index) < 5;
  }
}

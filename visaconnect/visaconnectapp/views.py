from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def hi(request): 
    return render(request, 'visaconnectapp/hi.html')

#(the below code is to get access to facebook page and it's posts)
#from django.http import JsonResponse
#import facebook

#def get_page_posts(request):
#    user_access_token = 'EAAE2zU3OxP8BO3mCsAygRRFHCDZBGqxEDjqzKdNUpC2jTpKABvMq5uNqRHlqIpvMBwLQWsqgCFF5zoWc1PyZBmnJmRuWDbZCHisEzcCH4LsweiFD4XH7Pfe9sWX6z8bINijwAwCTxEOFOqneuSyW69GS7ey5OOv6RMp5wB70xs17zmop5wyZAeLq1KbbKT3HG13vrAd53fAquJtIXhxNbbU0zg4DQw3Ro1LkJ5pNlUqhVnWiOfebliR1lrKUqJz5HPnHQ1OgSCgZD'
 #   page_id = '129027193627517'

  #  graph = facebook.GraphAPI(access_token=user_access_token, version="v13.0")

   # try:
        # Get the page's posts
    #    posts = graph.get_connections(id=page_id, connection_name='posts')
        # You can now work with the 'posts' data
     #   return JsonResponse({'posts': posts})
    #except facebook.GraphAPIError as e:
     #   return JsonResponse({'error': str(e)})
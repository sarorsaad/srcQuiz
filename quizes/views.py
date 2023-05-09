from django.shortcuts import render,get_object_or_404
from django.views.generic import ListView
from .models import Quiz
from django.http import JsonResponse


class QuizListView(ListView):
    model = Quiz
    template_name = 'quizes/main.html'
def quiz_view(request, pk):
   quiz= Quiz.objects.get ( pk = pk )
   return render(request, 'quizes/quiz.html', {'obj': quiz})

def quiz_data_view(request, pk):
    # Get the Quiz object with the specified pk
    quiz = Quiz.objects.get(pk=pk)
    questions = []
    
    # Iterate through the questions of the Quiz object
    for q in quiz.get_questions():
        answers = []
        
        # Iterate through the answers of each question
        for a in q.get_answers():
            answers.append(a.text)
        
        # Append the question and its answers to the questions list
        questions.append({str(q): answers})
    
    # Return a JSON response containing the questions and time of the Quiz object
    return JsonResponse({
        'data': questions,
        'time': quiz.time,
    })

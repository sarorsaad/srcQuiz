from django.db import models
import random

# Create your models here.
DIFF_CHOICES = (
    ('easy', 'easy'),
    ('medium', 'medium'),
    ('hard', 'hard'),
)

class Quiz(models.Model):
    name = models.CharField(max_length=120)
    topic = models.CharField(max_length=120)
    number_of_questions = models.IntegerField()
    time = models.IntegerField(help_text="duration of the quiz in minutes")
    required_score_to_pass = models.IntegerField(help_text="required score to pass the quiz")
    difficulty = models.CharField(max_length=6, choices=DIFF_CHOICES)
    
    def __str__(self):
        return f"{self.name} - {self.topic}"
    
    def get_questions(self):
            # Get all questions associated with the quiz
            questions = list(self.question_set.all())
            # Shuffle the questions randomly
            random.shuffle(questions)
            # Return a subset of questions based on the number of questions required for the quiz
            return questions[:self.number_of_questions]


    class Meta:
        verbose_name_plural = 'Quizzes'
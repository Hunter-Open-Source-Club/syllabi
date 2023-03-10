import os
import sys
import functools

import config
import syllabus

def log(*args, **kwargs):
	print(*args, file=sys.stderr, **kwargs)

def sort_chronologically(syllabi_files):
	def compare(file1, file2):
		s1, s2 = syllabus.parse(file1), syllabus.parse(file2)
		if not(s1 or s2):
			return 0

		"""
		The fall semester is later in the year than the spring semester
		and should be sorted accordingly.
		"""
		for s in (s1, s2):
			if s.season == 'Fall':
				s.year += 0.5

		return s2.year - s1.year

	return sorted(syllabi_files, key=functools.cmp_to_key(compare))

def faculty_icon(professor):
	if not professor:
		return
	path = config.FACULTY_PATH + '/' + professor.lower() + '.jpg'
	if not os.path.exists(path):
		return
	return '<img src="{src}" alt="{alt}">'.format(src=path, alt=professor)

def pretty_syllabus_name(semester, professor):
	if not(semester or professor):
		return
	# our funny convention of representing multiple professors
	if '+' in professor:
		professor = professor.replace('+', ', ')
	return professor + ' (' + semester + ')'

def pretty_category(category):
	return category.replace('-', ' ').title().replace('Cs', 'CS')

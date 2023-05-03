import utils

class Syllabus: pass

# grammar: <course>_..._<professor>_syllabus_<semester>.pdf
def parse(syllabus_name):
	syllabus = Syllabus()
	syllabus.file_name = syllabus_name

	tokens = syllabus_name.split('_')

	try:
		syllabus.course    = tokens[0]
		syllabus.professor = tokens[-3].capitalize()
		syllabus.semester  = tokens[-1].replace('.pdf','').upper()

		season_map      = { 'F': 'Fall', 'S': 'Spring' }
		syllabus.season = season_map[syllabus.semester[0]]
		syllabus.year   = int(syllabus.semester[1:])
	except:
		utils.log('Invalid syllabus filename:', syllabus_name)
		return None

	return syllabus

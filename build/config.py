import utils

HTML_TEMPLATE_PATH = 'build/template.html'
FACULTY_PATH       = 'img/faculty'
CSS_PATH           = 'css/styles.css'
JS_PATH            = 'js/scripts.js'
FAVICON_PATH       = 'favicon.ico'

COURSEMAP_PATH     = 'course_maps'
SYLLABI_PATH       = 'syllabi'

department_config = {
	'CS': {
		'full_name': 'Computer Science',
	},
	'PHILO': {
		'full_name': 'Philosophy',
	},
}

def init(department):
	global COURSEMAP_PATH, SYLLABI_PATH, TITLE, HEADING

	COURSEMAP_PATH += f'/{department}.json'
	SYLLABI_PATH   += f'/{department}'

	try:
		TITLE   = f'Hunter {department} Syllabi'
		HEADING = 'Hunter College ' + department_config[department]['full_name'] + ' Syllabi'
	except KeyError:
		utils.die(f'build failure: unknown department "{department}"')

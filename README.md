## Welcome to the Hunter College syllabi directory! ![image][tree-image]

http://syllabi.hunterosc.org

This syllabus bank and its web infrastructure are an initiative by the Hunter College Open Source Club. The syllabi were generously provided by a number of students listed in the [Contributors](#contributors) section below.

The currently supported departments are:
* [Computer Science](http://syllabi.hunterosc.org/cs)
* [Philosophy](http://syllabi.hunterosc.org/philo)

See the [How can I help?](#how-can-i-help) section to learn more about what you can do to help keep this project alive.

## How can I help?

Contents:
* [Add new syllabi](#add-new-syllabi)
* [Add missing faculty mugshots](#add-missing-faculty-mugshots)
* [Add a new department](#add-new-department)
* [Add new features to the website](#add-new-features-to-the-website)
* [Provide feedback and suggest improvements](#provide-feedback-and-suggest-improvements)
* [Advocate for things that will help this project](#advocate-for-things-that-will-help-this-project)

We are happy to accept your changes in whatever format you are comfortable providing them. If you would like to try your hand at submitting a pull request with your change, you may find this [freeCodeCamp tutorial](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/) helpful. Alternatively, you could [open an issue][new-issue-link], or send us an email at our `open.source.club.hunter@gmail.com` address. Some of the instructions below detail steps on a technical level, but remember that you can also talk to us informally at the venues we've mentioned above.

---

![image][butterfly-image] **NOTE**: To preview the website locally with your code changes applied, you can follow the instructions in the [Building the website locally](#building-the-website-locally) section.

### Add new syllabi

![image][butterfly-image] **NOTE**: We only support PDF files at this time. If you would like to share a URL to a course page, please [file an issue][new-issue-link].

In order to upload a new syllabus:

* Ensure your PDF's file name is in the canonical format: `<course code>_<professor>_syllabus_<semester>.pdf`
    + For example, `CS127_ligorio_syllabus_s20.pdf`
* Place the file into its corresponding department and course within the [`syllabi/`](syllabi/) directory
    + For example, `CS127_ligorio_syllabus_s20.pdf` should go into `syllabi/CS/CS_127/`
 
That's it!

If you are adding a syllabus for a new course which isn't accounted for yet, you will first have to take these additional steps:
* Create a new directory for the course under its department in [`syllabi/`](syllabi/)
    + For example, `syllabi/CS/CS_127`
* Add the new course to its department's course map in [`course_maps/`](course_maps/)
    + For example, a new computer science course would belong in the `CS.json` course map

### Add missing faculty mugshots

We now support adding thumbnails of faculty members next to the courses they're teaching:

<img width="647" alt="image" src="https://github.com/Hunter-Open-Source-Club/syllabi/assets/31445542/1cfb79cc-0d09-440b-bf43-24d89a054041">

To add a thumbnail:
* Place the image file in the [`img/faculty/`](img/faculty/) directory
* The file name should correspond to the faculty member's name used in the syllabi files
    + For example, to pair a thumbnail with `CS127_ligorio_syllabus_s20.pdf`, we would name the thumbnail file `ligorio.jpg`
* The image should be in JPG format
* Please try to keep the dimensions of the image within the low hundreds of pixels per side. The average image size is around `200x200`.

### Add new department

We've generalized our infrastructure to support multiple departments. Each department's syllabus bank gets published to a subpage denoted by its code , e.g. http://syllabi.hunterosc.org/philo for the philosophy department.

A **department** is defined by the following:
* A course map within the [`course_maps/`](course_maps/) directory, e.g. `course_maps/CS.json`
* A directory for the department's syllabi files within the [`syllabi/`](syllabi/) directory, e.g. `syllabi/CS/`
* Some configuration info in [`build/config.py`](build/config.py)
    + Currently the department's full name (e.g. `"CS": "Computer Science"`), and a background selected from [`img/textures/`](img/textures/) (yes! we can customize the background per department). 
    + This can be extended to further customize each department's page

### Add new features to the website

There is a lot of low-hanging fruit for improvements now that we've moved from [Jekyll](https://jekyllrb.com) to our own Python-driven build process and simplified our CSS, everything is customizable. We welcome your ideas and contributions. For large changes feel free to open an issue so we can brainstorm together.

### Provide feedback and suggest improvements

If you have any questions, ideas, or other feedback about the new iteration of the website, we set up a forum to discuss in https://github.com/Hunter-Open-Source-Club/HunterCS_CourseSyllabi/discussions/27.

### Advocate for things that will help this project

* GitHub: [Add support for preview deployments internal alpha experiment](https://github.com/actions/deploy-pages/pull/61)
    + If this is rolled out, we will be to build a preview website for every pull request. This will enable contributors to preview their contributions without having to run anything locally (and similarly, to help us review contributions without needing to sync them to our computers).
* Talk to the CUNY Hunter department about allowing students to host websites from ENIAC
    + Not only could it make for a very gratifying experience for students, but it can help us as a project implement many new interesting features. Currently the website is completely static -- we are using GitHub Pages for hosting, which comes with a set of limitations (there is no "backend"). See this article for an explanation of the limitations: https://www.wix.com/blog/static-vs-dynamic-website. As a simple example, if we hosted this website on ENIAC, we would be able to do something like keep a count of how many visitors we've had on each page, which departments and courses get the most traffic, etc. If we wanted to do this on a static website, we'd need to delegate to an external service like the draconian Google Analytics, which is out of the question (see: https://github.com/Hunter-Open-Source-Club/syllabi/issues/31)
* Talk to the CUNY Hunter department about adopting this project and sponsoring its infrastructure costs
    + Blake (@rvente) has been graciously paying for our domain for the last few years. In an ideal world the department would recognize the utility this project provides for the community and help us keep it running.
* Advocate for making CUNYFirst accessible by an open and un-obfuscated API so that students could build programs that utilize it and improve one another's lives
* Think of ways to help the CUNY Hunter student community at large. See Josh's (@joshnatis) writeup "*[Community Systems as a Learning Tool and Incentive](https://josh8.com/blog/Community_Systems.pdf): How a homegrown community and infrastructure
 can encourage students to learn outside of class while encouraging camaraderie and the adoption of the open source spirit*" for some ideas.

### Building the website locally
Run the following (in any Unix shell, like `bash`) to generate HTML files for each department:
```sh
for department in `ls syllabi`; do
    python3 build/build.py "$department"
done
```
You can then open those HTML files in your browser and see how they look.

## Contributors

Thank you to anyone that's helped out, we <3 you!

<table>
	<tr>
		<td align="center">
			<a href="https://github.com/RichAguil">
				<img src="https://avatars1.githubusercontent.com/u/24883474?s=460&u=3eaf29f201e0273fa51392990358f92265cc32eb&v=4" width="100px;" alt=""/><br>
				<sub><b>RichAguil</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/joshnatis">
				<img src="https://avatars2.githubusercontent.com/u/31445542?s=460&u=109df00292a0c58a57bfcb0024f01fe4ca8141fb&v=4" width="100px;" alt=""/><br>
				<sub><b>joshnatis</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/boubascript">
				<img src="https://avatars3.githubusercontent.com/u/31722784?s=400&u=8a409ca260e7856cd9e7a0a10a98b718eea937ea&v=4" width="100px;" alt=""/><br>
				<sub><b>boubascript</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/rvente">
				<img src="https://avatars1.githubusercontent.com/u/21066644?s=460&u=7f99b16845b8582df05e395ca5ddc024486969f6&v=4" width="100px;" alt=""/><br>
				<sub><b>rvente</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/khinshankhan">
				<img src="https://avatars2.githubusercontent.com/u/22206867?s=460&u=6976a13e1988144b1b1440d576b885a02a263847&v=4" width="100px;" alt=""/><br>
				<sub><b>khinshankhan</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/ChacaPatrick">
				<img src="https://avatars1.githubusercontent.com/u/40473502?s=460&v=4" width="100px;" alt=""/><br>
				<sub><b>ChacaPatrick</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/robbyoconnor">
				<img src="https://avatars2.githubusercontent.com/u/23088?s=460&u=02ba9a74c1af03782b6faf1dc5abee1ce635dc1b&v=4" width="100px;" alt=""/><br>
				<sub><b>robbyoconnor</b></sub>
			</a><br>
		</td>
	</tr>
	<tr>
		<td align="center">
			<a href="https://github.com/MarceloDamian">
				<img src="https://avatars3.githubusercontent.com/u/60354250?s=460&v=4" width="100px;" alt=""/><br>
				<sub><b>MarceloDamian</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/saarhaber">
				<img src="https://avatars0.githubusercontent.com/u/37675905?s=460&u=95ea9fb4287ce3cbb05ac29ab3aa85af6e8e761d&v=4" width="100px;" alt=""/><br>
				<sub><b>saarhaber</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/sajarin">
				<img src="https://avatars3.githubusercontent.com/u/15092743?s=460&u=2f82f1c0850e51f6e682e11039e83bba8f11a33a&v=4" width="100px;" alt=""/><br>
				<sub><b>sajarin</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/wongjessica">
				<img src="https://avatars2.githubusercontent.com/u/39626651?s=460&u=7290591317f209400c83192fa53a510899d2f49b&v=4" width="100px;" alt=""/><br>
				<sub><b>wongjessica</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/AjaniStewart">
				<img src="https://avatars2.githubusercontent.com/u/20689354?s=460&u=5be7d70179ddae10b76234ced49a7e36b5d449e3&v=4" width="100px;" alt=""/><br>
				<sub><b>AjaniStewart</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/lohs">
				<img src="https://avatars0.githubusercontent.com/u/55119191?s=400&v=4" width="100px;" alt=""/><br>
				<sub><b>lohs</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/ShihabIslam789">
				<img src="https://avatars2.githubusercontent.com/u/56773545?s=460&v=4" width="100px;" alt=""/><br>
				<sub><b>ShihabIslam789</b></sub>
			</a><br>
		</td>
	</tr>
	<tr>
		<td align="center">
			<a href="https://github.com/adradan/">
				<img src="https://avatars1.githubusercontent.com/u/22109143?s=460&v=4" width="100px;" alt=""/><br>
				<sub><b>adradan</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/Deondrede">
				<img src="https://avatars3.githubusercontent.com/u/38331348?s=460&u=909336265bd57b9f533b6c2ff43c91b85caa7a6e&v=4" width="100px;" alt=""/><br>
				<sub><b>Deondrede</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/La-Nique">
				<img src="https://avatars3.githubusercontent.com/u/54916166?s=400&u=8f3948009f1dfb021c87efe7494728fe9d580d58&v=4" width="100px;" alt=""/><br>
				<sub><b>La-Nique</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/lxwooxy">
				<img src="https://avatars.githubusercontent.com/u/69057359?v=4" width="100px;" alt=""/><br>
				<sub><b>lxwooxy</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/V993">
				<img src="https://avatars.githubusercontent.com/u/47122021?v=4" width="100px;" alt=""/><br>
				<sub><b>V993</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/Lupercio421">
				<img src="https://avatars.githubusercontent.com/u/41970268?v=4" width="100px;" alt=""/><br>
				<sub><b>Lupercio421</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/KamilSachryn">
				<img src="https://avatars.githubusercontent.com/u/41388133?v=4" width="100px;" alt=""/><br>
				<sub><b>KamilSachryn</b></sub>
			</a><br>
		</td>
	</tr>
	<tr>
		<td align="center">
			<a href="https://github.com/jayjayh">
				<img src="https://avatars.githubusercontent.com/u/26288542?v=4" width="100px;" alt=""/><br>
				<sub><b>jayjayh</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/seamus2002/">
				<img src="https://avatars.githubusercontent.com/u/72629167?v=4" width="100px;" alt=""/><br>
				<sub><b>seamus2002</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/Talhaabid">
				<img src="https://avatars.githubusercontent.com/u/15316071?v=4" width="100px;" alt=""/><br>
				<sub><b>TalhaAbid</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://gitlab.com/uzluisf">
				<img src="https://gitlab.com/uploads/-/system/user/avatar/2474912/avatar.png" width="100px;" alt=""/><br>
				<sub><b>uzluisf</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://www.linkedin.com/in/unis-ing">
				<img src="https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry" width="100px;" alt=""/><br>
				<sub><b>Eunice Ng</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/ashfaku">
				<img src="https://avatars.githubusercontent.com/u/83651159?v=4" width="100px;" alt=""/><br>
				<sub><b>ashfaku</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/neil-kuldip">
				<img src="https://avatars.githubusercontent.com/u/56613674?v=4" width="100px;" alt=""/><br>
				<sub><b>neil-kuldip</b></sub>
			</a><br>
		</td>
	</tr>
	<tr>
		<td align="center">
			<a href="https://github.com/kamran-sajid">
				<img src="https://avatars.githubusercontent.com/u/95146449?v=4" width="100px;" alt=""/><br>
				<sub><b>Kamran Sajid</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/Henry-Cevallos">
				<img src="https://avatars.githubusercontent.com/u/44214010?v=4" width="100px;" alt=""/><br>
				<sub><b>Henry-Cevallos</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/defineEuclidian">
				<img src="https://avatars.githubusercontent.com/u/56561858?v=4" width="100px;" alt=""/><br>
				<sub><b>defineEuclidian</b></sub>
			</a><br>
		</td>
		<td align="center">
			<a href="https://github.com/irisshakya">
				<img src="https://avatars.githubusercontent.com/u/46196492?v=4" width="100px;" alt=""/><br>
				<sub><b>irisshakya</b></sub>
			</a><br>
		</td>
                <td align="center">
                        <a href="https://github.com/A278PlusPi">
                                <img src="https://avatars.githubusercontent.com/u/84871142?v=4" width="100px;" alt=""/><br>
                                <sub><b>A278PlusPi</b></sub>
                        </a><br>
                </td>
                <td align="center">
                        <a href="https://github.com/CelesTech03">
                                <img src="https://avatars.githubusercontent.com/u/57969388?v=4" width="100px;" alt=""/><br>
                                <sub><b>CelesTech03</b></sub>
                        </a><br>
                </td>
                <td align="center">
                        <a href="https://github.com/Nawang17">
                                <img src="https://avatars.githubusercontent.com/u/77951020?v=4" width="100px;" alt=""/><br>
                                <sub><b>Nawang17</b></sub>
                        </a><br>
                </td>
	</tr>
	<tr>
                <td align="center">
                        <a href="https://github.com/qizongliang">
                                <img src="https://avatars.githubusercontent.com/u/72285030?v=4" width="100px;" alt=""/><br>
                                <sub><b>qizongliang</b></sub>
                        </a><br>
                </td>
		<td align="center">
                        <a href="https://github.com/DaTaDevo">
                                <img src="https://avatars.githubusercontent.com/u/40675303?v=4" width="100px;" alt=""/><br>
                                <sub><b>DaTaDevo</b></sub>
                        </a><br>
                </td>
		<td align="center">
                        <a href="https://github.com/kuwuwin">
                                <img src="https://avatars.githubusercontent.com/u/32178410?v=4" width="100px;" alt=""/><br>
                                <sub><b>kuwuwin</b></sub>
                        </a><br>
                </td>
	</tr>
</table>

[new-issue-link]: https://github.com/Hunter-Open-Source-Club/HunterCS_CourseSyllabi/issues/new?title=Syllabus%3A%20CS101%20-%20Intro%20to%20Foo&body=Share%20a%20URL%2C%20upload%20a%20PDF%2C%20say%20hello%2C%20etc...
[butterfly-image]: https://github.com/Hunter-Open-Source-Club/syllabi/assets/31445542/44e3b54e-5eb5-4533-aa53-568ae8d2f467
[tree-image]: https://github.com/Hunter-Open-Source-Club/syllabi/assets/31445542/989ba1fb-7a00-44aa-89b8-84e28a0fcf85

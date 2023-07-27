import PostWithLike from './Components/Card';
import { courses } from './mock/courses';

function App() {
    // console.log(courses);
    return (
        <div>
            {courses.map((course) => {
                return <PostWithLike key={course.id} course={course} />;
            })}
        </div>
    );
}

export default App;

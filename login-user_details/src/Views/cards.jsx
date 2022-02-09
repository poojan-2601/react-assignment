import {Card,CardBody,CardImg, CardText, CardTitle} from 'reactstrap';

const ProjectCard = (props) => {
    const {id,firstname,lastname,email,avatar} = props
    return(
        <Card
        style={{
            height: 100,
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            display: "flex",
        }}>
            <div>
            <CardImg
					alt="Card image cap"
					src={avatar}
					top
					style={{
						height: 80,
						margin: 10,
					}}
				/>
            </div>
            <CardBody>
                <CardTitle tag = "h5">
                    {id} {firstname} {lastname}
                </CardTitle>
                <CardText>{email}</CardText>
            </CardBody>
        </Card>
    )
}

export default ProjectCard;
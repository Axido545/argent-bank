import "./feature.css"
import PropTypes from 'prop-types';

export default function Feature({ title, url, content }) {
    return <div className="feature">
        <img className="img-feature" src={url} alt={title} />
        <p className="title-feature">{title}</p>
        <p>{content}</p>
    </div>
}

Feature.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,

}
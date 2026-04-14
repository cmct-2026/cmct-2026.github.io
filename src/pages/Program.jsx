import programPdf from '../assets/議程_v1.pdf';

const Program = () => {
    return (
        <div>
            <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: '2rem' }}>Program Schedule</h2>
            <div style={{ width: '100%', height: '800px', overflow: 'hidden' }}>
                <iframe
                    src={programPdf}
                    title="Program Schedule"
                    width="80%"
                    height="80%"
                    style={{ border: 'none' }}
                >
                    This browser does not support PDFs. Please download the PDF to view it: <a href={programPdf}>Download PDF</a>.
                </iframe>
            </div>
        </div>
    );
};

export default Program;

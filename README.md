**LocalPhoto ([local.photo](https://local.photo))** is your localhost for photo management, offering a privacy-friendly alternative to cloud-based photo libraries like Google or Apple Photos. This demo ([try.local.photo](https://try.local.photo)) of the **LocalPhoto Web** client provides a seamless and interactive experience for browsing, searching, and viewing photos. Powered by on-device AI, LocalPhoto ensures effortless organization and advanced tagging, all while keeping your data secure and private on your local server.

## Technology Stack

### Frontend

- **Next.js**: A React framework for server-side rendering and static site generation. It provides a robust foundation for building scalable web applications.
- **React**: A JavaScript library for building user interfaces. It allows for the creation of reusable UI components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs. It provides a set of predefined classes to style the application.
- **shadcn UI**: A set of accessible and customizable UI components for building high-quality web interfaces.
- **Lucide Icons**: A collection of simple and consistent icons for use in the application.

### Backend

- **Supabase**: An open-source Firebase alternative that provides a real-time database, authentication, and storage. It is used for managing user authentication and storing photo metadata. Supabase uses pgvector for efficient vector similarity search.
- **Flask**: A lightweight WSGI web application framework in Python. It is used for running a local server on the user's computer to upload images, generate embeddings using the ResNet-152 model, and store them in Supabase.
- **PyTorch and Torchvision**: PyTorch is an open-source machine learning library, and Torchvision is a package consisting of popular datasets, model architectures, and image transformations. They are used for image processing and running the ResNet-152 model for image recognition.

### Architecture

- **Client-Server Architecture**: The frontend (LocalPhoto Web) communicates directly with Supabase to fetch photo data and perform image recognition tasks.
- **Local Flask Server**: The Flask server runs on the user's computer to handle image uploads, generate embeddings using the ResNet-152 model, and store the embeddings in Supabase.
- **API Integration**: The frontend uses API routes to interact with Supabase for database operations.
- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/localphoto/localphoto-demo.git
cd localphoto-demo
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables: Create a .env.local file in the root directory and add the following environment variables:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Deployment

The demo application is deployed on Vercel at [try.local.photo](https://try.local.photo). Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

In addition to Vercel, the demo version of LocalPhoto Web utilizes several cloud services for optimal performance and scalability:
- **AWS S3**: Used for storing photos.
- **AWS CloudFront**: Provides fast, worldwide access to photos stored in S3.
- **AWS Lambda**: Handles image transformations.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Flask Documentation](https://flask.palletsprojects.com/en/2.0.x/)
- [PyTorch Documentation](https://pytorch.org/docs/stable/index.html)
- [Torchvision Documentation](https://pytorch.org/vision/stable/index.html)

## License

© 2023 LocalPhoto. All rights reserved.

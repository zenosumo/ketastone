# Architecture

## Core Architecture

- **Next.js 15 + TypeScript** with App Router
- **Clerk authentication** with custom onboarding flow
- **HeroUI components** for modern UI/UX
- **MongoDB** with collections: users, conversations, memories, constraints
- **ChatGPT API** with strict context enforcement
- **Chat interface** with message bubbles and memory dashboard

## Key Features Implementation

### 1. Authentication & Onboarding

- Clerk integration (signup/signin/profile management)
- Custom onboarding flow collecting name and interests
- Protected routes with middleware
- User session management

### 2. Chat Interface & Real-time Communication

- Message bubble UI with HeroUI components
- WebSocket/polling for real-time messaging
- Typing indicators and message status
- Text-based memory management through conversation
- Context-strict responses with refusal handling
- Conversation history with pagination

### 3. MongoDB Schema & Data Management

- **Users**: profile, preferences, onboarding data, settings
- **Conversations**: messages, timestamps, context, metadata
- **Memories**: categorized thematic data (diet, allergies, habits, interests)
- **Constraints**: topic boundaries, context rules, bot limitations

### 4. Memory Management System

- Natural language memory extraction from conversations
- Structured data storage with categories
- Automatic memory updates during chat
- Memory validation and conflict resolution
- Memory expiration and cleanup policies

### 5. Memory Dashboard

- User-friendly memory visualization
- Categorized display (interests, preferences, facts)
- Memory editing/deletion capabilities
- Export functionality for user data

### 6. AI Integration & Context Enforcement

- ChatGPT API with system prompts
- Context-aware response generation
- Hard constraint enforcement
- Fallback responses for off-topic requests
- Response validation and filtering

## Technical Implementation Requirements

### Security & Privacy

- Environment variable management
- API key rotation and security
- Data encryption at rest and in transit
- Rate limiting and abuse prevention
- GDPR compliance features

### Error Handling & Validation

- Input sanitization and validation
- API error handling and retry logic
- Database connection error management
- User-friendly error messages
- Graceful degradation strategies

### Performance & Scalability

- Response caching strategies
- Database query optimization
- Memory usage monitoring
- Conversation archiving system
- Storage limit management

### Future-Proofing for Specializations

- Configurable bot personalities
- External API integration framework (recipes, health data)
- Plugin architecture for domain-specific features
- Admin panel for constraint management
- Analytics and conversation quality tracking

## MongoDB Collections Schema

### Users Collection

```json
{
  "_id": "ObjectId",
  "clerkId": "string",
  "name": "string",
  "interests": ["string"],
  "preferences": {},
  "settings": {},
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Conversations Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "messages": [
    {
      "role": "user|assistant",
      "content": "string",
      "timestamp": "Date",
      "metadata": {}
    }
  ],
  "context": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Memories Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "category": "string",
  "key": "string",
  "value": "any",
  "source": "conversation|onboarding|manual",
  "confidence": "number",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Constraints Collection

```json
{
  "_id": "ObjectId",
  "name": "string",
  "description": "string",
  "rules": ["string"],
  "active": "boolean",
  "scope": "global|user",
  "createdAt": "Date"
}
```

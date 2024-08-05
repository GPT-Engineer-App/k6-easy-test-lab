import { useState, useEffect } from 'react';
import { Paw, Heart, Info, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const DogBreeds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const breeds = ['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'French Bulldog', 'Bulldog', 'Poodle', 'Beagle', 'Rottweiler', 'Boxer', 'Dachshund'];
  
  const filteredBreeds = breeds.filter(breed => 
    breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex">
        <Input
          type="text"
          placeholder="Search breeds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button variant="outline"><Search className="h-4 w-4 mr-2" /> Search</Button>
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredBreeds.map((breed) => (
            <motion.div
              key={breed}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{breed}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={`https://source.unsplash.com/400x300/?${breed.toLowerCase().replace(' ', '-')}`} alt={breed} className="w-full h-48 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
                  <p className="text-sm text-gray-600">A popular and beloved dog breed known for its unique characteristics and charm.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const FunFacts = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const facts = [
    "Dogs have a sense of time and can tell how long you've been gone.",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "Dalmatians are born completely white and develop their spots as they grow older.",
    "The Basenji is the only breed of dog that can't bark, but they can yodel!",
    "A dog's normal body temperature is between 101 to 102.5 degrees Fahrenheit.",
    "Dogs can understand up to 250 words and gestures.",
    "The Greyhound is the fastest dog breed, reaching speeds up to 45 mph.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentFact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-primary/10 p-6 rounded-lg shadow-md"
        >
          <p className="text-lg font-semibold">{facts[currentFact]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const CareTips = () => {
  const tips = [
    { title: "Balanced Diet", content: "Provide a balanced diet appropriate for your dog's age, size, and activity level." },
    { title: "Fresh Water", content: "Ensure your dog has access to fresh, clean water at all times." },
    { title: "Regular Exercise", content: "Regular exercise is crucial for your dog's physical and mental health." },
    { title: "Vet Check-ups", content: "Schedule regular check-ups with your veterinarian." },
    { title: "Grooming", content: "Groom your dog regularly, including brushing their teeth and trimming their nails." },
    { title: "Socialization", content: "Socialize your dog from an early age to help them become well-adjusted adults." },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-6">Essential Dog Care Tips</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tip.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Paw-some Dog World
        </motion.h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds" className="text-lg"><Paw className="mr-2 h-5 w-5" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg"><Info className="mr-2 h-5 w-5" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care" className="text-lg"><Heart className="mr-2 h-5 w-5" /> Care Tips</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="breeds">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Popular Dog Breeds</CardTitle>
                    <CardDescription>Explore some of the most beloved dog breeds around the world.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DogBreeds />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="facts">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Fun Dog Facts</CardTitle>
                    <CardDescription>Discover interesting facts about our canine companions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FunFacts />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="care">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Dog Care Tips</CardTitle>
                    <CardDescription>Learn how to keep your furry friend happy and healthy.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CareTips />
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

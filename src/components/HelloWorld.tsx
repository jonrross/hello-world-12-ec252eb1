import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function HelloWorld() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-12">
            <motion.h1
              className="text-6xl font-bold text-pink-700 tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              hello world 12
            </motion.h1>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

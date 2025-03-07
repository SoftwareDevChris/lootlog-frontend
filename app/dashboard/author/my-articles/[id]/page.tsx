"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { getUserArticleById } from "@/lib/db/articles";

import { LoadingScreen } from "@/components/ui/loading";
import { UpdateArticleForm } from "@/components/forms/UpdateArticleForm";

export default function EditArticlePage() {
  const params: { id: string } = useParams();

  const { data: article } = useQuery({
    queryKey: ["article", params.id],
    queryFn: async () => await getUserArticleById(params.id),
  });

  if (!article) return <LoadingScreen />;

  return <UpdateArticleForm article={article} />;
}

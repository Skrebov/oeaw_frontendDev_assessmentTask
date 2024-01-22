# General Information

This is my solution for the ACDH-CH Frontend Web Developer Assessment Task. I added [tailwind](https://tailwindcss.com/) for styling purposes and [shadcn/ui](https://ui.shadcn.com) for minimally styled components.
This solution contains all the proposed subtasks.

## Questions
**propose an algorithm for sorting search results according to their relevance with respect to the search term.**  
There are different algorithms which are used for such tasks. Most of them are based on the term-frequency and the inverse-document-frequency like the VSM or the BM25. 
It works as follows:  
. Preprocessing: Tokenization, Normalization, Stop Word Removal, ...  
. Indexing: Create Inverse Index  
. Ranking: TF-IDF  
. Relevance Scoring: Cosine Similarity or BM25   
. Sort by score  
Personally, I would use [elasticsearch](https://www.elastic.co/de/elasticsearch) for such purposes, if possible. 


**Reflect on the quality of the API – Do you see any conceptual or formal weaknesses, what would you do differently?**
- The description of the API misses the "zitat_lookup" parameter, which is actually needed to receive results at all.
- Some of the descriptions of the API are not detailed enough like "ordering". It is unclear which parameters can be passed.
- Generally it would be good to provide examples of how each parameter can be used.
- The mix of English and German in the parameters and the retured JSON are not optimal, in my opinion.
- Maybe it would be possible to not return all the meta-data (art, author, ..) on each request.  

